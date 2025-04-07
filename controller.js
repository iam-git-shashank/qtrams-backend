// const pool = require("./Databse");

const query = require("./queries");

const supabase = require('./supabase'); // Import the supabase client using require()

// pool.connect()

const validateEmailFormat = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return regex.test(email);
};

const form = async (req, res) => {
  const { email, username, contact, description } = req.body;
  if (email) {
    if (validateEmailFormat(email)) {
      console.log("Email format is valid.");

      const { data, error } = await supabase
        .from("users") // Specify your table name
        .insert([{ username, email, contact, description }])
        .select(); // Optional: Use `.select()` to return the inserted row(s)

      if (error) {
        console.error("Error inserting user:", error);
      } else {
        console.log("User inserted:", data);
      }
    } else {
      console.log("Invalid email format.");
    }
  }

  res.json({ hii: "fdfd" });
};



const msg=(req,res)=>{
  console.log(req.query)
  res.json({"hi":"name"})
}






module.exports = {
  form,
  msg
};


