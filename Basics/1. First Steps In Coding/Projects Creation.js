function ProjectsCreation([arg1, arg2])  {
    let name = arg1;
    let numberOfprojects = Number(arg2);
    let hoursForWork = numberOfprojects * 3;
    console.log(`The architect ${name} will need ${hoursForWork} hours to complete ${numberOfprojects} project/s.`)
}