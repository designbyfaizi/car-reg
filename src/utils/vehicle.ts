import { supabase } from "./supabase";

export const fetchMyVehicles = async ({ email }: { email: string }) => {
  try {
    console.log({ email })
    let { data, error } = await supabase
      .from('vehicle')
      .select('category, make, model, registrationNumber, user').eq('user', email)
    if (error) throw error;
    console.log(data)
    return { data, error }

  }
  catch (error: any) {
    console.error(error);
    return { data: null, error }
  }
}


export const fetchAllVehicles = async () => {
  try {
    let { data, error } = await supabase
      .from('vehicle')
      .select('category, make, model, registrationNumber, user')
    if (error) throw error;
    console.log(data)
    return { data, error }

  }
  catch (error: any) {
    console.error(error);
    return { data: null, error }
  }
}

export const addVehicle = async (payload: Object) => {
  try {
    let { data, error } = await supabase
      .from('vehicle')
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
