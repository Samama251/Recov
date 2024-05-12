import React from 'react';
import { Label } from "../../@/components/ui/label";
import { Textarea } from "../../@/components/ui/textarea";
import { Input } from "../../@/components/ui/input";
import { Button } from "../../@/components/ui/button";
import { CardContent, Card } from "../../@/components/ui/card";
import { UploadIcon } from "../../public/itemIcons/itemIcons";

interface ClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClaimModal: React.FC<ClaimModalProps> = ({ isOpen, onClose }) => {
  const modalClass = isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none';

  return (
    <div className={`fixed inset-0 flex  items-center justify-center z-50 transition-opacity duration-200 ease-in ${modalClass}`}>
      <div className="absolute inset-0  bg-black opacity-50"></div>
      <main key="1"
            className="w-11/12 sm:w-full mb-40 sm:mb-0 max-w-screen-sm mx-auto px-4 py-4 md:px-6 md:py-6 lg:py-8 bg-white rounded-lg z-10 border border-gray-400 max-h-[90vh] overflow-auto">
        <div className="space-y-6">
          <HeaderComponent />
          <Card>
            <CardContent>
              <FormComponent onClose={onClose} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

function HeaderComponent() {
  return (
    <div className="pl-3 pr-3 pt-3">
      <h1 className="text-3xl pb-2  font-bold tracking-tighter sm:text-4xl md:text-4xl">Claim Item</h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-[650px]">
        If you've lost an item, you can file a claim here. Provide the details about the item and your contact
        information, and we'll do our best to reunite you with your lost possession.
      </p>
    </div>
  );
}

function UploadComponent() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="proof-of-ownership" className="text-xl">Proof of Ownership</Label>
      <div className="flex items-center justify-center w-full">
        <label
          className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          htmlFor="proof-of-ownership-image"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <UploadIcon className="w-10 h-10 text-gray-400" />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
              or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 5MB)</p>
          </div>
          <Input className="hidden" id="proof-of-ownership-image" type="file" />
        </label>
      </div>
    </div>
  );
}


function FormComponent({ onClose }) {
  return (
    <form className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="item-description" className="text-xl">Description of the Item</Label>
        <Textarea
          className="min-h-[40px] p-2"
          id="item-description"
          placeholder="Provide details about the item you lost"
        />
      </div>
      <UploadComponent />
      <div className="grid gap-2">
        <Label htmlFor="additional-info" className="text-xl">Additional Information</Label>
        <Textarea
          className="min-h-[40px] p-3"
          id="additional-info"
          placeholder="Provide any additional information that might help"
        />
      </div>
      <div className="flex justify-between">
        <button onClick={onClose}>Close</button>
        <Button   className="bg-gray-950 text-stone-50 text-base transition-colors duration-500 ease-in-out transform hover:bg-gray-800"
                  type="submit">Submit Claim</Button>
      </div>
    </form>
  );
}

