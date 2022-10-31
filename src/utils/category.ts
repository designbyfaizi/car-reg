import { supabase } from "./supabase";

export const fetchAllCategories = async () => {
  try {
    let { data, error } = await supabase
      .from('category')
      .select('name')
    if (error) throw error;
    console.log(data)
    return { data, error }

  }
  catch (error: any) {
    console.error(error);
    return { data: null, error }
  }
}


export const addCategory = async (payload: Object) => {
  try {
    let { data, error } = await supabase
      .from('category')
      .insert([payload])
    if (error) throw error;
    console.log(data)
    return { data, error }

  }
  catch (error: any) {
    console.error(error);
    return { data: null, error }
  }
}