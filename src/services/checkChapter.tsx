import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function checkChapterExists(chapterNumber: number): Promise<string | 'CHAPTER_NOT_FOUND'> {
    const { data, error } = await supabase
        .from('chapter')
        .select('cha_id')
        .eq('cha_number', chapterNumber)
        .single();

    if (error || !data) {
        return 'CHAPTER_NOT_FOUND';
    }

    return data.cha_id;
}