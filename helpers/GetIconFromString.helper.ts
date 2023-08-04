import * as Si from "react-icons/si";
import * as Fa from "react-icons/fa";

export const GetIconFromStringHelper = (icon: string): React.ElementType => {
    const Family = icon.substring(0, 2).toLowerCase();

    switch (Family) {
        case "si":
            return (Si as any)[icon] as unknown as React.ElementType;
        case "fa":
            return (Fa as any)[icon] as unknown as React.ElementType;
        default:
            return Fa.FaCross;
    }
}