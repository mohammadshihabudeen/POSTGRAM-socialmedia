import axios from "axios";
export default axios.create(
    {
        baseURL: "https://expense-tracker-476c6-default-rtdb.firebaseio.com/"
    }
)