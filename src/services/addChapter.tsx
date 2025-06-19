import { createClient } from '@supabase/supabase-js';

// Load Supabase credentials from environment variables
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function addChapter(chapterNumber: number, bookId: number) {
    const { data, error } = await supabase
        .from('chapters')
        .insert([{ cha_number: chapterNumber, cha_book: bookId }])
        .select();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}