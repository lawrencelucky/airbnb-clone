import React from 'react';
import { Button } from '@material-ui/core';

import './SearchPage.css';

import SearchResult from './SearchResult';

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>62 stays &bull; 26 august to 30 august &bull; 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>
      </div>
      <SearchResult
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU'
        location='Private room in center of London'
        title='Stay at this spacios Edwardian House'
        description='1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine'
        star={4.73}
        price='£30 / night'
        total='£117 total'
      />
      <SearchResult
        img='https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg'
        location='Private room in center of London'
        title='Independent luxury studio apartment'
        description='2 guest • 3 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen'
        star={4.3}
        price='£40 / night'
        total='£157 total'
      />
      <SearchResult
        img='https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg'
        location='Private room in center of London'
        title='London Studio Apartments'
        description='4 guest • 4 bedroom • 4 bed • 2 bathrooms • Free Parking • Washing Machine'
        star={3.8}
        price='£35 / night'
        total='£207 total'
      />
      <SearchResult
        img='https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YWlyYm5ifGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
        location='Private room in center of London'
        title='30 mins to Oxford Streeet, Excel London'
        description='1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free Parking • Washing Machine'
        star={4.1}
        price='£55 / night'
        total='£320 total'
      />
      <SearchResult
        img='https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGFpcmJuYnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
        location='Private room in center of London'
        title='Spacious Peaceful Modern Bedroom'
        description='3 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Free Parking • Dry Cleaning'
        star={5.0}
        price='£60 / night'
        total='£450 total'
      />
      <SearchResult
        img='https://images.unsplash.com/photo-1599619339570-40c0d33ea93b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGFpcmJuYnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
        location='Private room in center of London'
        title='The Blue Room in London'
        description='2 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Washing Machine'
        star={4.23}
        price='£65 / night'
        total='£480 total'
      />
      <SearchResult
        img='https://images.unsplash.com/photo-1559599238-308793637427?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGFpcmJuYnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
        location='Private room in center of London'
        title='5 Star Luxury Apartment'
        description='3 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free Parking • Washing Machine'
        star={3.85}
        price='£90 / night'
        total='£650 total'
      />
    </div>
  );
};

export default SearchPage;
