import styled from 'styled-components'

const Wrapper = styled.div`
  h3 {
    margin: 2rem 0 0.5rem 0;
  }
  .company-name {
    display: flex;
  }
  .company {
    flex-basis: 80%;
  }
  .street-row {
    display: flex;
  }
  .street {
    flex-basis: 60%;
    padding: 0 1rem 0 0;
  }
  .house-number {
    flex-basis: 20%;
  }
  .zip-row {
    display: flex;
  }
  .zip {
    flex-basis: 40%;
  }
  .country-row {
    display: flex;
  }
  .country {
    flex-basis: 80%;
  }
  .tax-row {
    display: flex;
  }
  .tax {
    flex-basis: 80%;
  }

  .moreOffice {
    margin: 2rem 0;
    .form-label {
      margin: 0;
    }
  }
  .office-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .office-row-left {
      flex-basis: 80%;
    }

    .btn {
      display: flex;
      font-size: 1rem;
    }
  }
  .city {
    flex-basis: 40%;
    padding: 0 1rem 0 0;
  }
`

export default Wrapper
