import {useMemo} from "react";
import {useWeb3React} from "@web3-react/core";
import {CoursesArtifact} from "../../config/web3/artifacs/Courses";

const {address, abi} = CoursesArtifact
const useCourses = async () => {

  const {active, library, chainId} = useWeb3React()

  const courses = useMemo(() => {
    if (active) return new library.eth.Contract(abi, address[chainId]);
  }, [active, chainId, library?.eth?.Contract]);

  console.log('result ', courses.methods)
  const name = 'Victor';
  const category = 'Technology';
  // const test = await courses.methods.createNewUser(name, category).call()
  // console.log('create', test)
  const result = await courses?.methods?.getAllUsers()?.call()
  console.log('methods', result)
  return courses;
}

export default useCourses;
