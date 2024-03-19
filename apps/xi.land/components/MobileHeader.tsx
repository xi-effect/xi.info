import {Button} from '@xipkg/button';
import Stack from '@mui/material/Stack';

import {
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    ModalCloseButton,
} from '@xipkg/modal';
import { motion } from 'framer-motion';
import {Close} from '@xipkg/icons';
import {LinkMenuItem} from "./HeaderWhite";
import Image from "next/image";
import NextLink from "next/link";


interface PropMobileHeader {
    links: LinkMenuItem[],
    handleSonner: () => void
}

export default function MobileHeader({links, handleSonner}: PropMobileHeader) {
    return (
        <>
            <div className={'sm:relative'}>
                <ModalContent variant="full" >
                    <ModalHeader className={'border-none'}>
                        <ModalCloseButton onClick={() => handleSonner()}
                                          className="h-10 w-10 ml-auto sm:absolute bg-transparent flex p-2 sm:top-0 xl:top-0 right-[16px] sm:right-0 xl:right-[-56px]"
                                          variant="full"
                        >
                            <Close/>
                        </ModalCloseButton>
                        <ModalTitle>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 1 }}
                            >
                                <Image alt="xieffect logo" src="/xieffectlight.webp" height={24}
                                       width={202}/>
                            </motion.div>
                        </ModalTitle>
                    </ModalHeader>
                    <div className={'px-7'}>
                        {links && links.map((item) =>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 1 }}
                                className="w-full md:w-fit flex flex-col sm:flex-row gap-4 mt-8 "
                            >
                                <NextLink className={'opacity-40 text-[24px]'} href={item.link}>
                                    {item.label}
                                </NextLink>
                            </motion.div>
                        )}
                    </div>
                    <ModalFooter className={'border-none'}>
                        <Stack direction="row" width={'100%'}  spacing={2}>
                            <div> <Button size="s" type="submit">
                                Войти
                            </Button></div>
                            <div className={''}>
                                <Button size="s" variant="secondary">
                                    Зарегистрироваться
                                </Button>
                            </div>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </div>

        </>
    )
}