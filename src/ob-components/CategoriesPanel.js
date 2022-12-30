import React, {useState, useEffect} from 'react'
import styled from "styled-components/macro"
import {fontSize, spacing} from '../ob-style'
import Spacer from './Spacer'

const categoriesIconsPath = '/assets/otoboto/categories'
const categories = [
    {
        id: 1,
        title: 'קטנים',
        icon: `${categoriesIconsPath}/1.svg`,
        iconChecked: `${categoriesIconsPath}/1-checked.svg`,
        order: 1
    },
    {
        id: 2,
        title: 'משפחתיים',
        icon: `${categoriesIconsPath}/2.svg`,
        iconChecked: `${categoriesIconsPath}/2-checked.svg`,
        order: 2
    },
    {
        id: 3,
        title: 'מנהלים',
        icon: `${categoriesIconsPath}/3.svg`,
        iconChecked: `${categoriesIconsPath}/3-checked.svg`,
        order: 4
    },
    {
        id: 4,
        title: 'ספורטיביים',
        icon: `${categoriesIconsPath}/4.svg`,
        iconChecked: `${categoriesIconsPath}/4-checked.svg`,
        order: 5
    },
    {
        id: 5,
        title: 'ג׳יפים',
        icon: `${categoriesIconsPath}/5.svg`,
        iconChecked: `${categoriesIconsPath}/5-checked.svg`,
        order: 7
    },
    {
        id: 6,
        title: 'טנדרים',
        icon: `${categoriesIconsPath}/6.svg`,
        iconChecked: `${categoriesIconsPath}/6-checked.svg`,
        order: 10
    },
    {
        id: 7,
        title: 'מסחריים',
        icon: `${categoriesIconsPath}/7.svg`,
        iconChecked: `${categoriesIconsPath}/7-checked.svg`,
        order: 9
    },
    {
        id: 8,
        title: 'יוקרה',
        icon: `${categoriesIconsPath}/8.svg`,
        iconChecked: `${categoriesIconsPath}/8-checked.svg`,
        order: 6
    },
    {
        id: 9,
        title: 'מיניוואנים',
        icon: `${categoriesIconsPath}/9.svg`,
        iconChecked: `${categoriesIconsPath}/9-checked.svg`,
        order: 8
    },
    {
        id: 10,
        title: 'קרוסאוברים',
        icon: `${categoriesIconsPath}/10.svg`,
        iconChecked: `${categoriesIconsPath}/10-checked.svg`,
        order: 3
    }
]

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right; 
`

const CategoriesTabel = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Category = styled.div`
    margin: 15px;
`

const CategoryImage = styled.div`

`

const CategoryTitle = styled.div`

`

const Title = styled.div`
    font-size: ${fontSize.fontSize1};
    font-weight: 600;
`

const Description = styled.div`
    font-size: ${fontSize.fontSiz1};
    font-weight: 400;
    color: #717171;
`

const CategoriesPanel = ({initialSelectedCategories, onCategoriesChange}) => {

    const [selectedCategories, setSelectedCategories] = useState(initialSelectedCategories)

    useEffect(() => {
        const selectedCategoriesList = categories.filter(category => selectedCategories.indexOf(category.id) !== -1)
        onCategoriesChange(selectedCategoriesList)
    }, [selectedCategories])

    const toggleCategory = (id) => {
        if (isCategorySelected(id)) {
            setSelectedCategories(selectedCategories.filter(categoryId => categoryId !== id));
        } else {
            setSelectedCategories(oldArray => [...oldArray, id])
        }
    }

    const isCategorySelected = (id) => {
        return selectedCategories.indexOf(id) != -1
    }

    return (
        <Wrapper>
            <Title>
                בחר את קטגוריית הרכב
            </Title>
            <Spacer height={spacing.spacing1}/>
            <Description>
                ניתן לבחור מספר קטגוריות
            </Description>
            <CategoriesTabel>            
            {categories.sort((a,b) => a.order - b.order).map((category, index) => {
                return (
                    <Category key={category.id} onClick={() => toggleCategory(category.id)}>
                        <CategoryImage>
                            <img src={isCategorySelected(category.id) ? category.iconChecked : category.icon}/>
                        </CategoryImage>
                        <CategoryTitle>
                            <span>{category.title}</span>
                        </CategoryTitle>
                    </Category>
                )
            })} 
            </CategoriesTabel>           
        </Wrapper>
    )
}

export default CategoriesPanel; 