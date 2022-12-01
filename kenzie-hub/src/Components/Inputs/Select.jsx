import { StyledLabel, StyledSelect } from "./Inputs";

export function SelectType () {
    return (
        <>
            <StyledLabel>Selecionar módulo</StyledLabel>
            <StyledSelect>
                    <option value="">Selecione um módulo</option>
                    <option value="1">Primeiro módulo</option>
                    <option value="2">Segundo módulo</option>
                    <option value="3">Terceiro módulo</option>
                    <option value="4">Quarto módulo</option>
                    <option value="5">Quinto módulo</option>
            </StyledSelect>
        </>
    )
}

export function SelectLevel () {
    return (
        <>
            <StyledLabel>Selecionar o nível</StyledLabel>
            <StyledSelect>
                    <option value="">Selecione um nível</option>
                    <option value="1">Iniciante</option>
                    <option value="2">Intermediário</option>
                    <option value="3">Avançado</option>
            </StyledSelect>
        </>
    )
}