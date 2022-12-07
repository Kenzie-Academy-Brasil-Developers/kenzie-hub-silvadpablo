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

export function SelectLevel ( {register, defaultValue} ) {
    return (
        <>
            <StyledLabel htmlFor="level">Selecionar o nível</StyledLabel>
            <StyledSelect {...register} id="level" defaultValue={defaultValue}>
                    <option value="">Selecione um nível</option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
            </StyledSelect>
        </>
    )
}