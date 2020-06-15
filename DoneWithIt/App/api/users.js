import client from "./client";

const register = (userInfo) => client.post("/post", userInfo);

export default { register };
