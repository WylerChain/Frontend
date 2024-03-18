import { Link, Breadcrumbs as MuiBreadcrumbs, Stack, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { COLORS } from "@/utils/colors";

export type BreadcrumbsItems = { label: string; href?: string }[];

export type BreadcrumbsProps = {
  items: BreadcrumbsItems;
};

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <Stack
      sx={{ backgroundColor: COLORS.greyf5 }}
      height={54}
      display="flex"
      direction="row"
      alignItems="center"
      paddingX={{ xs: 2, md: 8 }}
      marginTop={{ xs: "80px", md: "120px" }}
      spacing={0}
    >
      <MuiBreadcrumbs
        key={`breadcrumb`}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ "& .MuiBreadcrumbs-separator": { marginX: "4px" } }}
      >
        {items.map((item) =>
          item.href ? (
            <Link
              key={item.label}
              href={item.href}
              color="inherit"
              underline="always"
              fontSize="14px"
              lineHeight="14px"
            >
              {item.label}
            </Link>
          ) : (
            <Typography key={item.label} fontWeight={700}>
              {item.label}
            </Typography>
          )
        )}
      </MuiBreadcrumbs>
    </Stack>
  );
};
