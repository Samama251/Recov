import { CardContent, Card,CardFooter  } from '../../@/components/ui/card';
import {ViewDetailsModal} from "./modal/ViewDetailsModal.tsx"
import { StatusBadge } from './StatusBadge.tsx';
import { CalendarIcon, TagIcon } from '../../public/itemIcons/itemIcons.tsx';
import React, { useState } from 'react';

interface ItemCardProps {
    id: string;
    IconComponent: React.ComponentType<{ className: string }>;
    itemName: string;
    description: string;
    dateReported: string;
    category: string;
    status: 'Lost' | 'Found';
}

export const ItemCard: React.FC<ItemCardProps> = ({
                                                      IconComponent,
                                                      itemName,
                                                      description,
                                                      dateReported,
                                                      category,
                                                      status,
                                                  }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const item = {
        title: itemName,
        description: description,
        image: "", // replace with actual image path
        reportedDate: dateReported,
        category: category,
        reportedBy: "", // replace with actual reportedBy value
        location: "", // replace with actual location value
    };

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };


    return (
        <Card className="w-full sm:max-w-sm p-4 sm:p-7">
            <CardContent className="grid grid-cols-[auto_2fr] gap-2 sm:gap-4 items-center">
                <div className="bg-gray-100 rounded-md p-3 mr-3 dark:bg-gray-800">
                    <IconComponent className="w-12 h-12 sm:w-12 sm:h-12 text-gray-500 dark:text-gray-400"/>
                </div>
                <div className="space-y-1">
                    <h3 className="text-xl sm:text-xl font-medium">{itemName}</h3>
                    <p className="text-lg sm:text-lg text-gray-500 dark:text-gray-400 max-w-prose">
                        {description}
                    </p>
                    <div className="flex mt-3 items-center gap-2 text-sm sm:text-sm text-gray-500 dark:text-gray-400">
                        <CalendarIcon className="w-6 h-6 sm:w-6 sm:h-6"/>
                        <span>Date Reported: {dateReported}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm sm:text-sm text-gray-500 dark:text-gray-400">
                        <TagIcon className="w-6 h-6 sm:w-6 sm:h-6"/>
                        <span>Category: {category}</span>
                    </div>
                    <div className="flex items-center gap-2 text-lg sm:text-lg font-medium">
                        <StatusBadge status={status}/>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-center ">
                <button
                    className="text-black text-xl"
                    onClick={handleButtonClick}
                >
                    View Details
                </button>
                <ViewDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} item={item} />
            </CardFooter>
        </Card>
    );
};
