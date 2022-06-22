import { Text, useTheme, theme } from "@nextui-org/react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 1rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Text css={{ color: theme?.colors.gray100.value }} h1>
        Hola Vicente!
      </Text>
      <Text css={{ color: theme?.colors.gray100.value }} h2>
        Bienvenido a tu diario de vida
      </Text>
    </div>
  );
};
