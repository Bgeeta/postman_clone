import { Typography, Box, TextareaAutosize } from "@mui/material"

const textareaStyle = { 
    width: '100%', 
    padding: 10,  
    background: `url(http://i.imgur.com/2cOaJ.png)`,
    backgroundAttachment: 'local',
    backgroundRepeat: 'no-repeat',
    paddingLeft: 35,
    paddingTop: 10,
    borderColor: '#ccc' 
}

function printHelper(obj){
    if(obj == null) return 'null';
    else if(typeof(obj)==="string") return obj;
    let readableobj = '{ \n';
    for(let key in obj) {
        // console.log(key, obj[key])
        readableobj += '\t'
        // console.log(typeof obj[key])
        readableobj += (typeof obj[key] === "string")? `${key}: "${obj[key]}"` : (typeof obj[key] === "object")?`${key}: `+printHelper(obj[key]):`${key}: ${obj[key]}`; 
        if (Object.keys(obj).pop() !== key.toString()) {
            readableobj += ',\n'
        }
    }
    readableobj += '\n}';
    return readableobj;
}

const Response = ({ data }) => {
    let obj = data;
    
    let readableobj = printHelper(obj)

    return (
        <Box>
            <Typography mt={2} mb={2}>Response</Typography>
            <TextareaAutosize 
                minRows={3}
                maxRows={9}
                style={textareaStyle}
                disabled="disabled"
                value={readableobj}
            />
        </Box>
    )
}

export default Response;