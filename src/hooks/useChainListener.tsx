import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { pol_api_dev } from '../Recoil/recoil'
import {
    blockNumber as b,
    finalizedBlockNumber as f,
} from '../Recoil/blockListener'

const useChainListener = () => {

    const api = useRecoilValue(pol_api_dev)
    const setBlockNumber = useSetRecoilState(b);
    const setFinalizedBlockNumber = useSetRecoilState(f);
    const bn = useRecoilValue(b)
    const burnr = useRecoilValue(pol_api_dev)
    console.log(burnr)

    useEffect(() => {
        (async () => {
            await api?.rpc.chain.subscribeNewHeads((header: any) => {
                setBlockNumber(header.number.toHuman())
            })
            await api?.rpc.chain.subscribeFinalizedHeads((header: any) => {
                setFinalizedBlockNumber(header.number.toHuman())
            })
            /*await burnr?.rpc.chain.subscribeNewHeads((lastHeader: any) => {
                console.log(lastHeader.number.toHuman())
            })*/
        })()
    }, [bn])
}

export default useChainListener