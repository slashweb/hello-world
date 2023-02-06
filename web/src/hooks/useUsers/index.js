import {useMemo} from "react";
import {useWeb3React} from "@web3-react/core";
import { UsersArtifact } from "../../config/web3/artifacs/Users";

const {address, abi} = UsersArtifact

const useUsers = () => {
  const {active, library, chainId} = useWeb3React()

  const users = useMemo(() => {
    if (active) return new library.eth.Contract(abi, address[chainId]);
  }, [active, chainId, library?.eth?.Contract]);

  return users
}

export default useUsers
