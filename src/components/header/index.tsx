//@ts-nocheck

import ButtonComponent from "../button";
import {useEffect, useState} from "react";
import web3 from "web3"

const Header = () => {

    const [address, setAddress] = useState("")
    const [balance, setBalance] = useState<string | null>(null)
    const [error, setError] = useState(false)

    const isWindowAndHasMetaTask = typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';

    const connectWallet = async () => {

        if (isWindowAndHasMetaTask) {
            /* has installed    */
            setError(false)
            try {
                const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
                const id = accounts[0]
                setAddress(id)
            } catch (e) {
                console.log(e)
            }
        } else {
            /* has not installed    */
            setError(true)
            console.warn('Meta has not installed')
        }
    }

    const getConnectedWallet = async () => {
        if (isWindowAndHasMetaTask) {
            /* has installed    */
            try {
                const accounts = await window.ethereum.request({method: 'eth_accounts'})


                const id = accounts[0]
                if (id) {
                    setAddress(id)
                }
            } catch (e) {
                console.log(e)
            }
        } else {
            /* has not installed    */
            console.warn('Wallet not connected !!')
        }
    }

    const getAccountHandler = async () => {
        if (isWindowAndHasMetaTask) {
            /* has installed    */
            window.ethereum.on("accountsChanged", account => {
                setAddress(account[0])
            })
        } else {
            /* has not installed    */
            console.warn('Error while connecting to the account.')
        }
    }

    const getBalance = async () => {
        const web = new web3(window.ethereum)
        const balance: string = await web.eth.getBalance(address)
        setBalance(balance)
    }

    useEffect(() => {
        /* get connected wallet on page refresh */
        getConnectedWallet();

        /* update address when account change */
        getAccountHandler();
    }, [])

    useEffect(() => {
        /* get the balance */
        if (address) {
            getBalance()
        } else {
            setBalance(null)
        }
    }, [address])

    const smartContract = async () => {
        const hash = '0x283Af0B28c62C092C9727F1Ee09c02CA627EB7F5';
        console.log(hash)
    }

    return (
        <header className={"bg-white  px-4 py-4"}>
            <div className="container grid gap-4 md:flex items-center justify-between">
                {balance ? <h3 className={'text-lg font-semibold '}>Your balance is : <b>{balance}</b></h3> :
                    <h3 className={'font-semibold text-lg'}>My Todos</h3>}
                <div className="ml-auto font-bold flex items-center gap-3" title={address}>
                    {error && <div className={"bg-red-100 text-red-600 rounded px-3 py-2 font-medium text-sm"}>Metamask has not
                        install. <a
                            className={'underline'}
                            target={"_blank"}
                            href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">Click
                            here</a> to download</div>}

                    {
                        address ?
                            <ButtonComponent className={"!rounded-full !bg-gray-100 !text-gray-700 cursor-default"}
                                             disabled>Connected To
                                : <b>{`${address.substring(0, 4)}...${address.substring(38)}`}</b></ButtonComponent>
                            :
                            <ButtonComponent className={'!rounded-full'} onClick={connectWallet}>Connect
                                Wallet</ButtonComponent>
                    }
                    {/*<ButtonComponent className={'!rounded-full !bg-gray-400 text-gray-700'} onClick={smartContract}>Smart Contract</ButtonComponent>*/}
                </div>
            </div>
        </header>
    )
}

export default Header
