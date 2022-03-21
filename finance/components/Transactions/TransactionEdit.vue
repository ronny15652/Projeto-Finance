<template>
  <div class="my-4 mt-10 space-y-4">
    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
      <div>
        <AppFormLabel>Data da transação</AppFormLabel>
        <AppFormInput
          v-model="localTransaction.date"
          type="date"
        />
      </div>

      <div>
        <AppFormLabel>Valor</AppFormLabel>
        <AppFormInput
          v-model="localTransaction.amount"
          type="number"
        />
      </div>

      <div>
        <AppFormLabel>Descrição</AppFormLabel>
        <AppFormInput v-model="localTransaction.description" />
      </div>

      <div>
        <AppFormLabel>Categoria</AppFormLabel>
        <AppFormSelect
          v-model="localTransaction.categoryId"
          :options="categories"
        />
      </div>
    </div>

    <div class="space-x-4 flex items-center justify-end">
      <a
        href=""
        class="inline-flex text-gray-700 text-sm"
        @click.stop.prevent="onCancel()"
      > Cancelar </a>
        <a
        @click="deleteTransaction"
          href=""
          class="inline-flex items-center justify-center border focus:outline-none transition ease-in-out duration-150 text-white bg-red-600 hover:bg-red-800 border-orange-600 hover:border-rede-800 rounded text-sm px-3 py-2"
        > Excluir </a>
          <AppButton @click="updateTransaction"> Editar </AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/Ui/AppButton';
import AppFormInput from '~/components/Ui/AppFormInput';
import AppFormLabel from '~/components/Ui/AppFormLabel';
import AppFormSelect from '~/components/Ui/AppFormSelect';
export default {
	name: 'TransactionEdit',
	components: {
		AppButton,
		AppFormInput,
		AppFormLabel,
		AppFormSelect
	},

	data() {
		return {
			localTransaction: {
				date: this.transaction.date,
				description: this.transaction.description,
				amount: this.transaction.amount,
				categoryId: this.transaction.category.id
			},
			categories: []
		};
	},

	props: {
		transaction: {
			type: Object,
			default: () => ({})
		}
	},

	async fetch() {
		this.categories = await this.$store.dispatch('categories/getCategories');
	},

	methods: {
		updateTransaction() {
			this.$store
				.dispatch('transactions/updateTransaction', { id: this.transaction.id, data: this.localTransaction })
				.then(response => {
					this.$emit('update', {
						...response,
						category: this.categories.find(o => o.id == this.localTransaction.categoryId)
					});
					this.onCancel();
				});
		},
    deleteTransaction() {
      this.$store.dispatch('transactions/deleteTransaction', { id: this.transaction.id, data: this.localTransaction})
      	.then(response => {
            this.$emit('delete', {
              ...response,
              category: this.categories.find(o => o.id == this.localTransaction.categoryId)
            })
          });
      },
		onCancel() {
			this.$emit('cancel');
		}
	}
};
</script>
