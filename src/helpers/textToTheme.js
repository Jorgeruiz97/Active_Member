import { themes } from '@fluentui/react-northstar';

const textToTheme = (text) => {
  switch (text) {
    case 'dark':
      return themes.teamsDark
    case 'default':
      return themes.teams
    case 'contrast':
      return themes.teamsHighContrast
    default:
      return themes.teams
  }
}

export default textToTheme;
