import React from 'react';

interface Props {
    tags: string[] | undefined;
}

export const Tags = ({ tags }: Props) => {
    if (!tags || tags.length === 0) {
        return null;
    }

    const displayedTags = tags.slice(0, 3);

    return (
        <div className="w-1/2">
            <ul className="flex flex-row justify-end">
                {displayedTags.map((tag, index) => (
                    <li key={index} className="text-xs px-1.5 py-1">{tag}</li>
                ))}
            </ul>
        </div>
    );
}
