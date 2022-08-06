import { Stack } from "@mui/material"
import { 
    HeaderComponent, 
    Logo, 
    Input, 
    Button, 
    Icon, 
    SearchIcon 
} from "./styles"

export const Header = () => {
    return (
        <HeaderComponent>
            <Stack direction={'row'} spacing={3} justifyContent={'space-between'}>
                <Logo>Logo</Logo>

                <Input 
                    placeholder="Pesquisar fruta"
                    InputProps={{ endAdornment: <SearchIcon />}}
                    size='small'
                />

                <Button>
                    <Icon />
                </Button>
            </Stack>
        </HeaderComponent>
    )
}