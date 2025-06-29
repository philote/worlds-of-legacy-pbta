#!/usr/bin/env node

import { randomBytes } from 'crypto';
import { readdir, readFile, writeFile, rename } from 'fs/promises';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Generate a 16-character alphanumeric UUID
function generate16CharUUID() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const bytes = randomBytes(16);
    
    for (let i = 0; i < 16; i++) {
        result += chars[bytes[i] % chars.length];
    }
    
    return result;
}

// Process a single JSON file
async function processFile(filePath) {
    try {
        console.log(`Processing: ${filePath}`);
        
        // Read and parse the JSON file
        const content = await readFile(filePath, 'utf8');
        const data = JSON.parse(content);
        
        // Generate new 16-character UUID
        const newUUID = generate16CharUUID();
        
        // Update the JSON data
        const oldId = data._id;
        data._id = newUUID;
        data._key = `!items!${newUUID}`;
        
        // Write updated JSON back to file
        const updatedContent = JSON.stringify(data, null, 2);
        await writeFile(filePath, updatedContent, 'utf8');
        
        // Generate new filename
        const dir = dirname(filePath);
        const oldFilename = basename(filePath);
        const newFilename = oldFilename.replace(oldId, newUUID);
        const newFilePath = join(dir, newFilename);
        
        // Rename file if filename contains the old ID
        if (oldFilename.includes(oldId)) {
            await rename(filePath, newFilePath);
            console.log(`  Renamed: ${oldFilename} -> ${newFilename}`);
        }
        
        console.log(`  Updated ID: ${oldId} -> ${newUUID}`);
        
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
    }
}

// Process all JSON files in a directory
async function processDirectory(dirPath) {
    try {
        const files = await readdir(dirPath);
        
        for (const file of files) {
            if (file.endsWith('.json')) {
                const filePath = join(dirPath, file);
                await processFile(filePath);
            }
        }
    } catch (error) {
        console.error(`Error processing directory ${dirPath}:`, error.message);
    }
}

// Main function
async function main() {
    const packsDir = join(__dirname, '..', 'src', 'packs');
    
    try {
        const packDirs = await readdir(packsDir);
        
        for (const packDir of packDirs) {
            const packPath = join(packsDir, packDir);
            console.log(`\nProcessing pack directory: ${packDir}`);
            await processDirectory(packPath);
        }
        
        console.log('\nAll pack items have been updated with 16-character UUIDs!');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();