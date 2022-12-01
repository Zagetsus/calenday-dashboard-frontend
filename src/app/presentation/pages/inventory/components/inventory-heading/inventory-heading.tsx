import { useRouter } from 'next/router';
import { Box, ButtonTag, Typography } from '~/app/presentation/components';
import makeStyles from './inventory-heading-styles';

function InventoryHeadingComponent() {
  const classes = makeStyles();

  const router = useRouter();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>Estoque</Typography>

      <Box className={classes.buttonBox}>
        <ButtonTag variantStyle='outlined'>Criar Categorias</ButtonTag>
        <ButtonTag
          onClick={() => router.push('/inventory/product-registration')}
          variantStyle='contained'
        >
          Cadastrar Produto
        </ButtonTag>
      </Box>
    </Box>
  );
}

export default InventoryHeadingComponent;
