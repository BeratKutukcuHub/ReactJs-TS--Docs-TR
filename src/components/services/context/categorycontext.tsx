import React, { createContext, useState } from "react"
import { CategoryDescription } from "../../site-components/pages/categoryforpage"
import { ReactNodes } from "../../site-components/layout"

export const GetCategoryContext = createContext({stateCategoryDescription : (_value: React.SetStateAction<CategoryDescription>):void=> {},CategoryDescription : CategoryDescription.All})
export const CategoryProvider = ({children}:ReactNodes) => {
    const [category , setCategory] = useState(CategoryDescription.All)
    return (
        <GetCategoryContext.Provider value={{stateCategoryDescription : setCategory,CategoryDescription : category}}>
        {children}
        </GetCategoryContext.Provider>
    )
}