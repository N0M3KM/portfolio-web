import React, { ReactNode } from 'react';
import { EmblaViewportRefType } from "embla-carousel-react";

export interface CardProps {
    title: string;
    description: string;
    date : string;
    buttonWord : string;
    link : string;
}

export interface NavItemProps {
    label : string;
    href : string;
    active ?: boolean;
    className ?: string;
};

export interface TimelineNodeProps {
    emblaRef: EmblaViewportRefType;
    educationCards: { key: number; date: string; school: string; info: string }[];
}

export interface BackgroundGradientProps {
    children?: React.ReactNode;
    className?: string;
    customGradient?: string,
    containerClassName?: string;
    animate?: boolean;
}

export interface MeteorProps {
    number?: number;
    className?: string;
}

export interface IconItemProps {
    children : string;
    href : string;
    className ?: string;
};

export interface ArrowButtonProps {
    direction: 'left' | 'right'; 
    onClick: () => void;
}

export interface SkillCardProps {
    title : string;
    icon : string;
    isActive ?: boolean;
    borderColor ?: string
}

export interface SkillInfoCardProps {
    title : string;
}

export interface TitleProps {
    title : string;
    icon : ReactNode;
}

export interface ClipboardLabelProps {
    text: string;
    icon : ReactNode;
}