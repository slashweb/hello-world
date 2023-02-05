import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";


const useCourses = () => {

  const { active, library, chainId } = useWeb3React()

  const courses = useMemo(() => new library.eth.Contract(
    '',

  ), active, chainId, library?.eth?.Contract)

}

export default useCourses;
