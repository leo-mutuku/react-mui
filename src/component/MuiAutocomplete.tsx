import { Stack, Autocomplete, TextField } from "@mui/material"
import { useState } from "react"
type skill = {
    id:number;
    lable: string
}
const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']
const skillsOption = skills.map((skill, index)=>{{
    id:index + 1
    label:skill
}})
export const MuiAutocomplete = () => {
    const [value, setValue] = useState<string | null>(null)
    const [skill, setSkill] = useState<skill | null>(null)
    console.log(skillsOption)
  return (
    <Stack spacing={2}  width={'250px'}>
        <Autocomplete options={skills}
         renderInput={(params)=><TextField {...params} label='skills'/>}
         value={value}
         freeSolo
         onChange={(event:any, newValue:string | null)=>setValue(newValue)}
        />
         <Autocomplete 
         options={skillsOption}
         renderInput={(params)=><TextField {...params} label='skills'/>}
         value={skill}
         onChange={(event:any, newValue:skill | null)=>setSkill(newValue)}
        />
    </Stack>
  )
}
