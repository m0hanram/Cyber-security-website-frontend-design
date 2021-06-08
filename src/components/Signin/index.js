import React,{useState} from 'react'
import {SigninContainer, SigninBorder, SigninH1, Label, Input, UserNameContainer, PasswordContainer} from './SigninElements'
import {Button} from '../ButtonElement'


const Signin = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <SigninContainer>
            <SigninBorder>
                <SigninH1>Sign in</SigninH1>
                <UserNameContainer>
                    <Label>
                        Username
                    </Label>
                    <Input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="name" placeholder="username" />
                </UserNameContainer>
                <PasswordContainer>
                    <Label>
                        Password
                    </Label>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="password" />
                </PasswordContainer>
                <br />
                <Button primary="true" dark="true" to="/">
                        Sign in
                </Button>
            </SigninBorder>
        </SigninContainer>
    )
}

export default Signin
