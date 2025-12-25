import { prisma } from "./lib/prisma";

async function run() {
    // const createUser=await prisma.user.create({
    //     data:{
    //         name: "maidul",
    //         email:"maidula@gmail.com"
    //     }
    // })
    // console.log("Created User",createUser)
    // const createPost=await prisma.post.create({
    //     data:{
    //         title:"This is title",
    //         content:"This is content",
    //         authorId:1
    //     }
    // })
    // console.log("Created post", createPost)
    // const createProfile= await prisma.profile.create({
    //     data:{
    //         bio:"this is bio",
    //         userId:1
    //     }
    // })
    // console.log("Created Profile: ",createProfile)

    //! Retive all user
    const users=await prisma.user.findMany({
        include:{
            posts:true,
            profile:true
        }
    });
    console.log(users);
}
run();