import { useParams } from "react-router-dom";
import { projects } from "../database/Projects";
import { Box, Typography } from "@mui/material";

const ProjectDetail = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <Typography>Project not found</Typography>;

  return (
    <Box>
      <Typography variant="h4">{project.title}</Typography>
      <Typography>{project.description}</Typography>

      {/* You can show README-like content here */}
      <Typography sx={{ mt: 2 }}>
        Detailed info about the project...
      </Typography>
    </Box>
  );
};

export default ProjectDetail;