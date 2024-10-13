import { languageLogo, frameworkLogo, toolLogo, databaseLogo } from '@/libs/info/logo'

export const Selection = (title : string) => {
    switch (title.toLowerCase()) {
        case "language" : {
            return languageLogo
        }
        case "framework" : {
            return frameworkLogo
        }
        case "database" : {
            return databaseLogo
        }
        case "tool & library" : {
            return toolLogo
        }
    }
}