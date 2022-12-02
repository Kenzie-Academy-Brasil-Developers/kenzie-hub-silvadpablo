import { StyledLabel, StyledSelect } from "./Inputs";

export function SelectType ( { register } ) {
    return (
        <>
            <StyledLabel htmlFor="course_module">Selecionar módulo</StyledLabel>
            <StyledSelect {...register} id="course_module">
                    <option value="">Selecione um módulo</option>
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
            </StyledSelect>
        </>
    )
}

export function SelectLevel () {
    return (
        <>
            <StyledLabel htmlFor="level">Selecionar o nível</StyledLabel>
            <StyledSelect id="level">
                    <option value="">Selecione um nível</option>
                    <option value="1">Iniciante</option>
                    <option value="2">Intermediário</option>
                    <option value="3">Avançado</option>
            </StyledSelect>
        </>
    )
}