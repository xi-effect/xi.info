

import { Button } from '@xipkg/button';
import {
    Modal,
    ModalContent,
    ModalDescription,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    ModalTrigger,
    ModalCloseButton,
} from '@xipkg/modal';
import { Input } from '@xipkg/input';
import { Label } from '@xipkg/label';
import { Close } from '@xipkg/icons';
import {LinkMenuItem} from "./HeaderWhite";


interface PropMobileHeader {
    links : LinkMenuItem[],
    handleSonner : () => void
}

export default function MobileHeader({links , handleSonner} : PropMobileHeader){
    return (
        <>
            <div>
                <ModalContent variant="full">
                    <ModalCloseButton onClick={() => handleSonner()}
                        className="h-10 w-10 ml-auto sm:absolute bg-transparent flex p-2 sm:top-0 xl:top-0 right-[16px] sm:right-0 xl:right-[-56px]"
                        variant="full"
                    >
                        <Close/>
                    </ModalCloseButton>
                    <ModalHeader>
                        <ModalTitle>Edit profile</ModalTitle>
                        <ModalDescription>
                            Make changes to your profile here. Click save when you're done.
                        </ModalDescription>
                    </ModalHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                    </div>
                    <ModalFooter>
                        <Button size="m" type="submit">
                            Save changes
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </div>

        </>
        )
}