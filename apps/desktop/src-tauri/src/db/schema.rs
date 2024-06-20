// @generated automatically by Diesel CLI.

diesel::table! {
    notes (id) {
        id -> Integer,
        content -> Text,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}
