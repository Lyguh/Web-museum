import React from 'react';
import Container from "@/components/shared/container";
import Logo from "@/components/ui/logo";
import NavigationLinks from "@/components/ui/navigation-links";

const Navigation = () => {
    return (
        <div className={"bg-[#FFEDDA]"}>
            <Container className={"flex justify-between items-center"}>
                <Logo/>
                <NavigationLinks className={"pl-[106px]"}/>
            </Container>
        </div>
    );
};

export default Navigation;