import {
    Box, 
    Checkbox ,
    FormControlLabel,
    FormControl,
    FormLabel,
    FormGroup,
    FormHelperText,
} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { useState } from 'react'
export default function MuiCheckbox() {
    const [acceptTmC, setAcceptTmC] = useState(false)
    const [skills, setSkills] = useState<string[]>([])
    console.log(skills)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setAcceptTmC(event.target.checked)
    }
    const handleSkillChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const index = skills.indexOf(event.target.value)
        if(index === -1){
            setSkills([...skills, event.target.value])
        }
         else{
                setSkills(skills.filter((skill)=>skill !== event.target.value))
            }
        

    }
  return (
    <Box >
        <Box>
            <FormControlLabel 
            label='I accept terms and conditions'
            control={<Checkbox 
                checkedIcon={<BookmarkIcon />}
                checked={acceptTmC}
                onChange={handleChange}/>}
            />
        </Box>
        <Box>
            <Checkbox icon={<BookmarkBorderIcon />}
            checked={acceptTmC} 
            onChange={handleChange}
            size="small"
            color='secondary'/>
            </Box>
            <Box>
                <FormControl error>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row  >
                 <FormControlLabel 
                label='HTML'
                control={<Checkbox value={'html'}
                checkedIcon={<BookmarkIcon />}
                checked={skills.includes('html')}
                onChange={handleSkillChange}/>}
            />
            <FormControlLabel
            label='CSS'
            control={<Checkbox value={'css'}
            checkedIcon={<BookmarkIcon />}
            checked={skills.includes('css')}
            onChange={handleSkillChange}/>} />
                 <FormControlLabel
            label='JAVASCRIPT'
            control={<Checkbox value={'javascript'}
            checkedIcon={<BookmarkIcon />}
            checked={skills.includes('javascript')}
            onChange={handleSkillChange}/>} />
                    </FormGroup>
                    <FormHelperText>Invalid Selection</FormHelperText>
                </FormControl>
            </Box>
            
    </Box>
  )
}
