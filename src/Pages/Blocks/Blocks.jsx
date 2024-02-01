import { Typography } from "@material-tailwind/react";

const Blocks = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <Typography variant="h1" color="blue-gray">
        Alhamdulillah
      </Typography>
      <Typography variant="h1" color="blue">
        SubhanAllah
      </Typography>
      <Typography variant="h1" color="red">
        La Ilaha Illalah
      </Typography>
      <Typography variant="h1" color="green">
        Allahu Akbar
      </Typography>
    </div>
  );
};

export default Blocks;
