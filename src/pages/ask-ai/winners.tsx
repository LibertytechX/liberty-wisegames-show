import { WebsiteHeaderBottomHero } from '@/components/layout';
import { LandingPageHeader } from '@/features/ask_ai_by_glo/component';
import { DashTable } from '@/features/dashboard';
import React from 'react';

const Winners = () => {
  return (
    <div className='bg-[#111]'>
      <LandingPageHeader />

      <div className="text-white">
        <WebsiteHeaderBottomHero title="Congratulations to the winners 🎉" />

        <DashTable
          emptyNotice={'No Winners yet'}
          emptyNoticeSubheading={
            'No games won yet by any user. Details of Winners would be displayed here.'
          }
          gameType={'wyseCash'}
          showFilters={false}
          title=""
          hasResultPicksComponent={false}
          data={{}}
          isLoading={false}
        />
      </div>
    </div>
  );
};

export default Winners;
