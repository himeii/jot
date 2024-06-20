// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::sync::{Arc, Mutex};

use db::connection::establish_connection;
use diesel::SqliteConnection;
mod db;

struct DbConnection {
    connection: SqliteConnection,
}

fn main() {
    tauri::Builder::default()
        .manage(Arc::new(Mutex::new(DbConnection {
            connection: establish_connection(),
        })))
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
