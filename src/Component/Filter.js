import React from 'react'
import { Button } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { filter } from "../Redux/Actions/actions"

const Filter = () => {
    const dispatch = useDispatch()
    return (
        <div>
             <Button onClick={()=>dispatch(filter("All"))} inverted color='violet'>
        All
      </Button>
      <Button onClick={()=>dispatch(filter("Done"))}  inverted color='purple'>
        Done
      </Button>
      <Button onClick={()=>dispatch(filter("unDone"))} inverted color='pink'>
        unDone
      </Button> 
        </div>
    )
}

export default Filter
