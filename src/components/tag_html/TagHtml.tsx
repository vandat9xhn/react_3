import * as React from "react";

//
export interface TagHtmlProps {
    Tag: React.ElementType;
    attrs?: React.HTMLAttributes<TagHtmlProps["Tag"]>;
}

//
function TagHtml({ Tag, attrs }: TagHtmlProps) {
    //
    return (
        <div>
            <Tag {...attrs}>Tag: {Tag}</Tag>
        </div>
    );
}

export default TagHtml;
