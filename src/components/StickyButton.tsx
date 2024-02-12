import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

interface StickyButtonProps{
    moveTo:()=>void;
}
const StickyButton = ({moveTo}:StickyButtonProps) => {
  return (
    <div className="sticky-button" onClick={moveTo}>
    <Fab color="primary" aria-label="add">
      <AddIcon />
    </Fab>
    </div>
  );
};

export default StickyButton;
