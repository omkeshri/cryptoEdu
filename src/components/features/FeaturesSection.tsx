import React from 'react';
import { ValueProposition } from './ValueProposition';
import { LearningJourney } from './LearningJourney';
import { SocialProof } from './SocialProof';

export const FeaturesSection = () => {
  return (
    <>
      <ValueProposition />
      <LearningJourney />
      <SocialProof />
    </>
  );
};