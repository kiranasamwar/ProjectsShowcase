import styled from 'styled-components'

export const BgContainer = styled.div`
  margin-left: 80px;
`

export const SelectCategoryInput = styled.select`
  height: 35px;
  width: 30%;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  margin-top: 40px;
  margin-bottom: 40px;
  outline: none;
`

export const HeaderContainer = styled.div`
  background-color: #f1f5f9;
`

export const HeaderImage = styled.img`
  width: 150px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 80px;
`

export const ProjectsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`

export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureImage = styled.img`
  margin-bottom: 15px;
  margin-top: 50px;
  width: 450px;
`

export const FailureHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;
  margin-bottom: -10px;
`

export const FailureInfo = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
`

export const FailureRetryButton = styled.button`
  background-color: #328af2;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 10px 25px 10px 25px;
`
