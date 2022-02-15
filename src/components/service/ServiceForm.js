import {useState, useEffect} from 'react'

import styles from '../project/ProjectForm.module.css'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

export default function ServiceForm() {
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text" 
                text="Nome do serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleOnChange}
            />
            <Input 
                type="number" 
                text="Custo do serviço"
                name="cost"
                placeholder="Insira o valor do serviço"
                handleOnChange={handleOnChange}
            />
            <Input 
                type="text" 
                text="Descrição do serviço"
                name="description"
                placeholder="Descreva o serviço"
                handleOnChange={handleOnChange}
            />
            <SubmitButton>
                
            </SubmitButton>
        </form>
    )
}